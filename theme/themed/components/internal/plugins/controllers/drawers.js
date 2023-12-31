import debounce from '../../debounce';
export class DrawersController {
    constructor() {
        this.drawers = [];
        this.drawersRegistrationListener = null;
        this.scheduleUpdate = debounce(() => {
            var _a;
            (_a = this.drawersRegistrationListener) === null || _a === void 0 ? void 0 : _a.call(this, this.drawers);
        }, 0);
        this.registerDrawer = (config) => {
            this.drawers = this.drawers.concat(config);
            this.scheduleUpdate();
        };
        this.onDrawersRegistered = (listener) => {
            if (this.drawersRegistrationListener !== null) {
                console.warn('[AwsUi] [runtime drawers] multiple app layout instances detected');
            }
            this.drawersRegistrationListener = listener;
            this.scheduleUpdate();
            return () => {
                this.drawersRegistrationListener = null;
            };
        };
        this.clearRegisteredDrawers = () => {
            this.drawers = [];
        };
    }
    installPublic(api = {}) {
        var _a;
        (_a = api.registerDrawer) !== null && _a !== void 0 ? _a : (api.registerDrawer = this.registerDrawer);
        return api;
    }
    installInternal(internalApi = {}) {
        var _a, _b;
        (_a = internalApi.clearRegisteredDrawers) !== null && _a !== void 0 ? _a : (internalApi.clearRegisteredDrawers = this.clearRegisteredDrawers);
        (_b = internalApi.onDrawersRegistered) !== null && _b !== void 0 ? _b : (internalApi.onDrawersRegistered = this.onDrawersRegistered);
        return internalApi;
    }
}
//# sourceMappingURL=drawers.js.map