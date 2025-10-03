
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Xchangeb2bCollector extends SketchCollector {

    static CONFIG = {
        id: "xchangeb2b",
        name: "xchangeb2b",
        description: "i18n.collectors.xchangeb2b.description",
        version: "0",
        website: "https://xchangeb2b.com/XCH/V4.1d_TC/tr_invoice_history.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1232543.jpg",
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
        entryUrl: "https://xchangeb2b.com/XCH/V4.1d_TC/tr_invoice_history.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Xchangeb2bCollector.CONFIG);
    }
}
