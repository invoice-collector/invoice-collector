
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UsetifulCollector extends SketchCollector {

    static CONFIG = {
        id: "usetiful",
        name: "Usetiful",
        description: "i18n.collectors.usetiful.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1F8P5oKJTHBtFWXX/live_YWNjdF8xRjhQNW9LSlRIQnRGV1hYLF9NWnJQS0hoeEtQM2dwOHpoa1FGdW5XSHlxUTVSUVZ5LDU2ODEzNTYz0200mu9fQaqH?s=il&locale=de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1435746.jpg",
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
        entryUrl: "https://invoice.stripe.com/i/acct_1F8P5oKJTHBtFWXX/live_YWNjdF8xRjhQNW9LSlRIQnRGV1hYLF9NWnJQS0hoeEtQM2dwOHpoa1FGdW5XSHlxUTVSUVZ5LDU2ODEzNTYz0200mu9fQaqH?s=il&locale=de-DE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UsetifulCollector.CONFIG);
    }
}
