
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StarTankstelleFlottenkartenCollector extends SketchCollector {

    static CONFIG = {
        id: "star_tankstelle_flottenkarten",
        name: "Star Tankstelle Flottenkarten",
        description: "i18n.collectors.star_tankstelle_flottenkarten.description",
        version: "0",
        website: "https://flottenkarte.star.de/Invoice/DownloadInvoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778212.jpg",
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
        loginUrl: "https://flottenkarte.star.de/Invoice/DownloadInvoice/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StarTankstelleFlottenkartenCollector.CONFIG);
    }
}
