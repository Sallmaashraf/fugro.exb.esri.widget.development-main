/** @jsx jsx */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------
import {
  DataSourceTypes,
  FormattedMessage,
  Immutable,
  jsx,
  React,
  type UseDataSource,
} from "jimu-core";
import type { AllWidgetSettingProps } from "jimu-for-builder";
// import { NumericInput, Dropdown, DropdownButton, DropdownMenu, DropdownItem, Button, Tooltip } from 'jimu-ui';
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow,
} from "jimu-ui/advanced/setting-components";
import { DataSourceSelector } from "jimu-ui/advanced/data-source-selector";
// import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'
// #endregion ------------------- Jimu / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------------- Custom Components ------------------------------
// #endregion ----------------- Custom Components ------------------------------

// #region ------------------------ Resources ----------------------------------
import type { IMConfig } from "../config";
import defaultMessages from "./translations/default";
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ========================== TYPES ====================================
// #endregion ======================= TYPES ====================================

// #region ==================== STYLED COMPONENTS ==============================
// #endregion ================= STYLED COMPONENTS ==============================

// #region ==================== EXPORTED SETTINGS ==============================
const Settings = (props: AllWidgetSettingProps<IMConfig>) => {
  // #region ---------------------- Props ----------------------------------
  const {
    id,
    // config,
    onSettingChange,
    // useDataSources,
    // useMapWidgetIds,
    // useDataSourcesEnabled,
  } = props;
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

  const onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    onSettingChange({
      id: id,
      useDataSourcesEnabled,
    });
  };
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  const onMapWidgetSelected = (useMapWidgetIds: string[]): void => {
    onSettingChange({
      id: id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    // Save the data source:
    onSettingChange({
      id: id,
      useDataSources,
    });
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <div className='jimu-widget-setting widget-setting-fugro'>
      <SettingSection
        title={props.intl.formatMessage({
          id: "mapWidgetLabel",
          defaultMessage: defaultMessages.mapWidgetLabel,
        })}
      >
        <SettingRow>
          <MapWidgetSelector
            onSelect={onMapWidgetSelected}
            useMapWidgetIds={props.useMapWidgetIds}
          />
        </SettingRow>
      </SettingSection>
      <SettingSection
        title={props.intl.formatMessage({
          id: "dataSourceLabel",
          defaultMessage: defaultMessages.dataSourceLabel,
        })}
      >
        <SettingRow>
          <DataSourceSelector
            types={Immutable([DataSourceTypes.FeatureLayer])}
            useDataSources={props.useDataSources}
            useDataSourcesEnabled={props.useDataSourcesEnabled}
            onToggleUseDataEnabled={onToggleUseDataEnabled}
            onChange={onDataSourceChange}
            widgetId={props.id}
            isMultiple
          />
        </SettingRow>
      </SettingSection>
      <SettingSection
        title={props.intl.formatMessage({
          id: "rangeCirclesLabel",
          defaultMessage: defaultMessages.rangeCirclesLabel,
        })}
      >
        <SettingRow>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormattedMessage
              id='numberOfRings'
              defaultMessage={defaultMessages.numberOfRings}
            />
            <span>
              <strong>
                REPLACE ME with a number input with label for the number of
                rings.
              </strong>
            </span>
          </div>
        </SettingRow>
        <SettingRow>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormattedMessage
              id='ringRadiusIncrementDistance'
              defaultMessage={defaultMessages.ringRadiusIncrementDistance}
            />
            <span>
              <strong>
                REPLACE ME with (1) a number input with label and (2) a distance
                unit dropdown with label (e.g. meters, kilometers, miles, etc.).
              </strong>
            </span>
          </div>
        </SettingRow>
      </SettingSection>
    </div>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Settings;
// #endregion ================= EXPORTED SETTINGS ==============================
