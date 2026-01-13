
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VaultpressCollector extends SketchCollector {

    static CONFIG = {
        id: "vaultpress",
        name: "VaultPress",
        description: "i18n.collectors.vaultpress.description",
        version: "0",
        website: "https://vaultpress.com/login/?action=require_for&url=https%3A%2F%2Fdashboard.vaultpress.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11360.jpg",
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
        loginUrl: "https://vaultpress.com/login/?action=require_for&url=https%3A%2F%2Fdashboard.vaultpress.com%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VaultpressCollector.CONFIG);
    }
}
