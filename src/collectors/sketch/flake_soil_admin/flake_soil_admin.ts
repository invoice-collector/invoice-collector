
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlakeSoilAdminCollector extends SketchCollector {

    static CONFIG = {
        id: "flake_soil_admin",
        name: "Flake Soil Admin",
        description: "i18n.collectors.flake_soil_admin.description",
        version: "0",
        website: "https://flake-soil.com/admin595u5upn4/index.php?controller=AdminLogin&token=dd1710d65958ae0cfa1a10c8dafc4940&redirect=AdminDashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1604291.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://flake-soil.com/admin595u5upn4/index.php?controller=AdminLogin&token=dd1710d65958ae0cfa1a10c8dafc4940&redirect=AdminDashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlakeSoilAdminCollector.CONFIG);
    }
}
