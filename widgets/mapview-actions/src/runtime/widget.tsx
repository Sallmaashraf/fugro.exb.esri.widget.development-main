// TODO: This is a placeholder file. We will replace it with our widget's UI and business logic code.
/** @jsx jsx */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------
import { jsx, React, type AllWidgetProps } from "jimu-core";
// #endregion ------------------- Jimu / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------------- Custom Components ------------------------------
// #endregion ----------------- Custom Components ------------------------------

// #region ------------------------ Resources ----------------------------------
import type { IMConfig } from "../config";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ==================== STYLED COMPONENTS ==============================
// #endregion ================= STYLED COMPONENTS ==============================

// #region ==================== EXPORTED WIDGET ==============================
const Widget = (props: AllWidgetProps<IMConfig>) => {
  // #region ---------------------- Props ----------------------------------
  const { useMapWidgetIds, useDataSources } = props;
  // #endregion ------------------- Props ----------------------------------
  
  // #region ---------------------- Constants ----------------------------------
  // #endregion ------------------- Constants ----------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------- Short-Circuit (Invalid Settings) -----------------------
  // #endregion ------- Short-Circuit (Invalid Settings) -----------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  if (!useMapWidgetIds && !useDataSources) {
    return (
      <div className='widget-demo jimu-widget m-2'>
        <p>📈 Please select a map widget and data source. 🗺</p>
      </div>
    );
  } else if (!useMapWidgetIds || useMapWidgetIds.length === 0) {
    return (
      <div className='widget-demo jimu-widget m-2'>
        <p>Please select a map widget.</p>
      </div>
    );
  } else if (!useDataSources || useDataSources.length === 0) {
    return (
      <div className='widget-demo jimu-widget m-2'>
        <p>📈 Please select a data source. 🗺</p>
      </div>
    );
  } else {
    return (
      <div className='widget-demo jimu-widget m-2'>
        {useMapWidgetIds &&
          useDataSources &&
          useMapWidgetIds.length === 1 &&
          useMapWidgetIds.length === 1 && (
            <p>
              Map Widget and data source selected! Let's build out our widget UI
              and business logic now! 💃🕺
            </p>
          )}
      </div>
    );
  }
  // #endregion -------------------- Render ------------------------------------
};
export default Widget;
// #endregion ================= EXPORTED WIDGET ==============================
