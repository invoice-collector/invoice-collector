
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TaxFilerCollector extends SketchCollector {

    static CONFIG = {
        id: "tax_filer",
        name: "Tax Filer",
        description: "i18n.collectors.tax_filer.description",
        version: "0",
        website: "https://taxfiler.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201354.jpg",
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
        loginUrl: "https://taxfiler.co.uk/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TaxFilerCollector.CONFIG);
    }
}
