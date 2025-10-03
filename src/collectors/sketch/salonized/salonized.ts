
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SalonizedCollector extends SketchCollector {

    static CONFIG = {
        id: "salonized",
        name: "Salonized",
        description: "i18n.collectors.salonized.description",
        version: "0",
        website: "https://app.salonized.com/c/15716/l/15795/register/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2203314.jpg",
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
        entryUrl: "https://app.salonized.com/c/15716/l/15795/register/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SalonizedCollector.CONFIG);
    }
}
