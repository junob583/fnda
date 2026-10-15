/**
 * 고래잇! 마트 프로모션 통합 관리 대시보드 - Vanilla JavaScript Logic
 * Chart.js Integration, LocalStorage Checklist, Interactive Simulator & Store Filter
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. 데이터 확인 및 상태 초기화
  if (!window.DASHBOARD_DATA) {
    console.error("DASHBOARD_DATA가 로드되지 않았습니다.");
    return;
  }

  const data = window.DASHBOARD_DATA;
  let currentStore = "all"; // 'all', 'central', 'park', 'river'
  let currentChecklistFilter = "all";

  // 차트 인스턴스 보관 객체
  const charts = {};

  // 2. D-Day 카운트다운 초기화
  function initDDay() {
    const targetDate = new Date("2026-11-02T00:00:00");
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const ddayElem = document.getElementById("ddayDisplay");
    if (ddayElem) {
      if (diffDays > 0) {
        ddayElem.textContent = `D-${diffDays}`;
      } else if (diffDays === 0) {
        ddayElem.textContent = "D-DAY (행사 개시)";
      } else {
        ddayElem.textContent = `행사 진행 중 (D+${Math.abs(diffDays)})`;
      }
    }
  }

  // 3. 점포별 핵심 KPI 카드 렌더링
  function updateKPICards(storeKey) {
    const store = data.storeSummary[storeKey];
    if (!store) return;

    const elSales = document.getElementById("kpiTotalSales");
    const elDaily = document.getElementById("kpiDailySales");
    const elVisitors = document.getElementById("kpiVisitors");
    const elOrders = document.getElementById("kpiOrders");
    const elCVR = document.getElementById("kpiCVR");
    const elAOV = document.getElementById("kpiAOV");
    const elStoreBadge = document.getElementById("currentStoreBadge");

    if (elSales) elSales.textContent = `${store.totalSales.toLocaleString()}원`;
    if (elDaily) elDaily.textContent = `${store.dailyAvgSales.toLocaleString()}원`;
    if (elVisitors) elVisitors.textContent = `${store.totalVisitors.toLocaleString()}명`;
    if (elOrders) elOrders.textContent = `${store.totalOrders.toLocaleString()}건`;
    if (elCVR) elCVR.textContent = `${store.cvr.toFixed(2)}%`;
    if (elAOV) elAOV.textContent = `${store.aov.toLocaleString()}원`;
    if (elStoreBadge) elStoreBadge.textContent = `${store.name} 과거 실적 기준선 (Baseline)`;
  }

  // 4. 차트 렌더링 (Chart.js)
  // 4-1. 일별 매출 추이 라인 차트
  function renderSalesTimeSeries(storeKey) {
    const ctx = document.getElementById("salesTimeSeriesChart");
    if (!ctx) return;

    const dates = data.dailySales.map(d => `${d.date.slice(5)} (${d.day})`);
    let datasets = [];

    if (storeKey === "all") {
      datasets = [
        {
          label: "센트럴점",
          data: data.dailySales.map(d => d.centralSales),
          borderColor: "#0284c7",
          backgroundColor: "rgba(2, 132, 199, 0.1)",
          tension: 0.25,
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 5
        },
        {
          label: "파크점",
          data: data.dailySales.map(d => d.parkSales),
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.25,
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 5
        },
        {
          label: "리버점",
          data: data.dailySales.map(d => d.riverSales),
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          tension: 0.25,
          borderWidth: 2,
          pointRadius: 2,
          pointHoverRadius: 5
        }
      ];
    } else {
      const propSales = storeKey === "central" ? "centralSales" : storeKey === "park" ? "parkSales" : "riverSales";
      const color = storeKey === "central" ? "#0284c7" : storeKey === "park" ? "#10b981" : "#f59e0b";
      const storeName = data.storeSummary[storeKey].name;

      datasets = [
        {
          label: `${storeName} 일별 매출`,
          data: data.dailySales.map(d => d[propSales]),
          borderColor: color,
          backgroundColor: color === "#0284c7" ? "rgba(2, 132, 199, 0.15)" : color === "#10b981" ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)",
          fill: true,
          tension: 0.3,
          borderWidth: 2.5,
          pointRadius: 3,
          pointHoverRadius: 6
        }
      ];
    }

    if (charts.timeSeries) {
      charts.timeSeries.data.labels = dates;
      charts.timeSeries.data.datasets = datasets;
      charts.timeSeries.update();
    } else {
      charts.timeSeries = new Chart(ctx, {
        type: "line",
        data: { labels: dates, datasets: datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          plugins: {
            legend: { position: "top", labels: { boxWidth: 12, font: { family: "Pretendard" } } },
            tooltip: {
              callbacks: {
                label: (item) => `${item.dataset.label}: ${item.parsed.y.toLocaleString()}원`
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { maxTicksLimit: 12, font: { size: 11 } } },
            y: {
              ticks: {
                callback: (val) => `${(val / 10000).toLocaleString()}만원`,
                font: { size: 11 }
              },
              grid: { color: "#f1f5f9" }
            }
          }
        }
      });
    }
  }

  // 4-2. 요일별 매출 및 객수 패턴 바 차트
  function renderDayOfWeekChart() {
    const ctx = document.getElementById("dayOfWeekChart");
    if (!ctx || charts.dayOfWeek) return;

    const days = data.dayOfWeekSummary.map(d => `${d.day}요일`);
    const sales = data.dayOfWeekSummary.map(d => d.sales / 10000); // 만원 단위
    const colors = data.dayOfWeekSummary.map(d => d.isPeak ? "#0284c7" : d.isLow ? "#ef4444" : "#94a3b8");

    charts.dayOfWeek = new Chart(ctx, {
      type: "bar",
      data: {
        labels: days,
        datasets: [{
          label: "누적 매출액 (만원)",
          data: sales,
          backgroundColor: colors,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `누적 매출: ${Math.round(ctx.parsed.y).toLocaleString()}만원 (${data.dayOfWeekSummary[ctx.dataIndex].orders.toLocaleString()}건)`
            }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            ticks: { callback: v => `${v.toLocaleString()}만` },
            grid: { color: "#f1f5f9" }
          }
        }
      }
    });
  }

  // 4-3. 카테고리별 주간 재고회전율 바 차트
  function renderCategoryTurnoverChart() {
    const ctx = document.getElementById("categoryTurnoverChart");
    if (!ctx || charts.categoryTurnover) return;

    const categories = data.categoryTurnover.map(c => c.category);
    const turnovers = data.categoryTurnover.map(c => c.turnover);
    const bgColors = data.categoryTurnover.map(c => c.turnover >= 2.0 ? "#0284c7" : c.turnover < 1.0 ? "#ef4444" : "#f59e0b");

    charts.categoryTurnover = new Chart(ctx, {
      type: "bar",
      data: {
        labels: categories,
        datasets: [{
          label: "평균 재고회전율 (회)",
          data: turnovers,
          backgroundColor: bgColors,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => `판매율: ${data.categoryTurnover[ctx.dataIndex].sellRate}% | 역할: ${data.categoryTurnover[ctx.dataIndex].role}`
            }
          }
        },
        scales: {
          x: { min: 0, max: 3.0, ticks: { stepSize: 0.5, callback: v => `${v}회` } },
          y: { grid: { display: false } }
        }
      }
    });
  }

  // 4-4. 고객 설문조사: 미구매 빈손 퇴장 요인 차트
  function renderSurveyExitChart() {
    const ctx = document.getElementById("surveyExitChart");
    if (!ctx || charts.surveyExit) return;

    const labels = data.survey.exitReasons.overall.map(r => r.reason);
    const percentages = data.survey.exitReasons.overall.map(r => r.pct);

    charts.surveyExit = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "응답 비율 (%)",
          data: percentages,
          backgroundColor: ["#ef4444", "#f59e0b", "#3b82f6", "#64748b", "#cbd5e1"],
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.parsed.x}% (${data.survey.exitReasons.overall[ctx.dataIndex].count}명)`
            }
          }
        },
        scales: {
          x: { max: 50, ticks: { callback: v => `${v}%` } },
          y: { grid: { display: false }, ticks: { font: { size: 11 } } }
        }
      }
    });
  }

  // 4-5. 고객 설문조사: 전략 2 사은 혜택 선호도 도넛 차트
  function renderSurveyStrategyChart() {
    const ctx = document.getElementById("surveyStrategyChart");
    if (!ctx || charts.surveyStrategy) return;

    const labels = data.survey.strategyFeedback.stepUp.map(s => s.type);
    const pcts = data.survey.strategyFeedback.stepUp.map(s => s.pct);

    charts.surveyStrategy = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [{
          data: pcts,
          backgroundColor: ["#0284c7", "#f59e0b", "#10b981", "#cbd5e1"],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { font: { size: 11 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`
            }
          }
        },
        cutout: "60%"
      }
    });
  }

  // 5. 점포 필터 버튼 이벤트 처리
  function setupStoreFilter() {
    const buttons = document.querySelectorAll(".store-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentStore = btn.dataset.store;

        updateKPICards(currentStore);
        renderSalesTimeSeries(currentStore);
      });
    });
  }

  // 6. 홍보 에셋 라이트박스 모달
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  function openModal(src, title, caption) {
    if (!modal) return;
    modalImg.src = src;
    modalTitle.textContent = title;
    modalCaption.textContent = caption;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // 모달 트리거 이벤트 연결
  function setupModalTriggers() {
    // 메인 포스터 배너 클릭
    const mainPosterThumb = document.getElementById("mainPosterThumb");
    if (mainPosterThumb) {
      mainPosterThumb.addEventListener("click", () => {
        openModal(
          "assets/images/main-poster.png",
          "고래잇! 알뜰한 11월 장보기 종합 포스터",
          "행사 기간: 2026.11.02(월) ~ 11.29(일) | 대상 점포: 센트럴점 · 파크점 · 리버점"
        );
      });
    }

    // 각 프로모션 카드 이미지 클릭
    const promoThumbs = document.querySelectorAll(".promo-thumb-trigger");
    promoThumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const src = thumb.dataset.imgSrc;
        const title = thumb.dataset.title;
        const note = thumb.dataset.note;
        openModal(src, title, note);
      });
    });
  }

  // 7. 16대 실행 체크리스트 (localStorage 기반)
  const STORAGE_KEY = "emart_promo_checklist_v1";

  function getStoredChecks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveStoredChecks(checks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
  }

  function updateChecklistProgress() {
    const checks = getStoredChecks();
    const total = data.checklist.length;
    const completed = Object.values(checks).filter(Boolean).length;
    const pct = Math.round((completed / total) * 100);

    const bar = document.getElementById("checklistProgressBar");
    const text = document.getElementById("checklistProgressText");

    if (bar) bar.style.width = `${pct}%`;
    if (text) text.textContent = `${completed} / ${total} 완료 (${pct}%)`;
  }

  function renderChecklist(filterOwner = "all") {
    const tbody = document.getElementById("checklistTableBody");
    if (!tbody) return;

    const stored = getStoredChecks();
    tbody.innerHTML = "";

    const filtered = data.checklist.filter(item => {
      if (filterOwner === "all") return true;
      return item.owner.includes(filterOwner);
    });

    filtered.forEach(item => {
      const isChecked = !!stored[item.id];
      const tr = document.createElement("tr");
      if (isChecked) tr.classList.add("completed-row");

      tr.innerHTML = `
        <td style="text-align: center;">
          <input type="checkbox" class="check-input" data-id="${item.id}" ${isChecked ? "checked" : ""}>
        </td>
        <td style="font-weight: 700; color: var(--primary);">${item.timing}</td>
        <td class="task-name">${item.task}</td>
        <td><span class="tag-baseline" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">${item.owner}</span></td>
        <td>${item.time}</td>
        <td><code style="font-size: 0.75rem; background: #f1f5f9; padding: 2px 5px; border-radius: 4px;">${item.proof}</code></td>
      `;

      const checkbox = tr.querySelector(".check-input");
      checkbox.addEventListener("change", (e) => {
        const curChecks = getStoredChecks();
        curChecks[item.id] = e.target.checked;
        saveStoredChecks(curChecks);
        if (e.target.checked) {
          tr.classList.add("completed-row");
        } else {
          tr.classList.remove("completed-row");
        }
        updateChecklistProgress();
      });

      tbody.appendChild(tr);
    });

    updateChecklistProgress();
  }

  function setupChecklistHandlers() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentChecklistFilter = btn.dataset.filter;
        renderChecklist(currentChecklistFilter);
      });
    });

    const resetBtn = document.getElementById("checklistResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("체크리스트의 모든 완료 상태를 초기화하시겠습니까?")) {
          localStorage.removeItem(STORAGE_KEY);
          renderChecklist(currentChecklistFilter);
        }
      });
    }
  }

  // 8. 실결제 객단가 정산 시뮬레이터 로직
  function setupSimulator() {
    const input = document.getElementById("simCartAmount");
    const valCart = document.getElementById("simValCart");
    const valDiscount = document.getElementById("simValDiscount");
    const valActual = document.getElementById("simValActual");
    const valDiff = document.getElementById("simValDiff");
    const note = document.getElementById("simStatusNote");

    if (!input) return;

    function calc(amount) {
      const parsedAmount = Math.max(0, parseInt(amount, 10) || 0);
      const isEligible = parsedAmount >= 35000;
      const discount = isEligible ? 2000 : 0;
      const actualPay = parsedAmount - discount;
      
      // 기존 평균 객단가(32,776원) 대비 실결제 증가액
      const baselineAOV = 32776;
      const diffFromBaseline = actualPay - baselineAOV;

      if (valCart) valCart.textContent = `${parsedAmount.toLocaleString()}원`;
      if (valDiscount) {
        valDiscount.textContent = isEligible ? `-2,000원 (적용)` : `0원 (35,000원 미달)`;
        valDiscount.style.color = isEligible ? "#ef4444" : "#64748b";
      }
      if (valActual) valActual.textContent = `${actualPay.toLocaleString()}원`;
      if (valDiff) {
        const sign = diffFromBaseline >= 0 ? "+" : "";
        valDiff.textContent = `${sign}${diffFromBaseline.toLocaleString()}원`;
        valDiff.style.color = diffFromBaseline >= 0 ? "#0284c7" : "#ef4444";
      }

      if (note) {
        if (isEligible) {
          if (parsedAmount === 35000) {
            note.innerHTML = `⚠️ <strong>핵심 주의:</strong> 평소 32,776원 구매 고객이 35,000원으로 담아도 실결제액은 33,000원(+224원 증가)에 불과합니다. 추가 매출보다 상품 원가가 더 클 수 있으므로 <strong>실제 증분이익을 반드시 함께 검토</strong>해야 합니다.`;
          } else {
            note.innerHTML = `✅ 35,000원 이상 조건 충족으로 <strong>2,000원 즉시 할인</strong>이 정상 적용됩니다.`;
          }
        } else {
          const needed = 35000 - parsedAmount;
          note.innerHTML = `ℹ️ 혜택 기준금액까지 <strong>${needed.toLocaleString()}원</strong>이 부족합니다. (장바구니 35,000원 이상 시 2,000원 즉시할인 적용)`;
        }
      }
    }

    input.addEventListener("input", (e) => {
      calc(e.target.value);
    });

    // 퀵 버튼
    const quickBtns = document.querySelectorAll(".quick-btn");
    quickBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.dataset.val;
        input.value = val;
        calc(val);
      });
    });

    // 초기 계산
    calc(input.value || 35000);
  }

  // 9. 전체 초기화 실행
  initDDay();
  updateKPICards("all");
  setupStoreFilter();
  renderSalesTimeSeries("all");
  renderDayOfWeekChart();
  renderCategoryTurnoverChart();
  renderSurveyExitChart();
  renderSurveyStrategyChart();
  setupModalTriggers();
  renderChecklist("all");
  setupChecklistHandlers();
  setupSimulator();
});
