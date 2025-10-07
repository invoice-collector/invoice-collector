
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhotoroomCollector extends SketchCollector {

    static CONFIG = {
        id: "photoroom",
        name: "Photoroom",
        description: "i18n.collectors.photoroom.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1IVDi9El9AVRLibq/live_YWNjdF8xSVZEaTlFbDlBVlJMaWJxLF9RVkIxUXpOczdEOUFHalgzbGg4ZEhHTGRjM0JRVWg0LDExNDM1ODcyNA02009WInwBT6?s=il&locale=en-GB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3111298.jpg",
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
        entryUrl: "https://invoice.stripe.com/i/acct_1IVDi9El9AVRLibq/live_YWNjdF8xSVZEaTlFbDlBVlJMaWJxLF9RVkIxUXpOczdEOUFHalgzbGg4ZEhHTGRjM0JRVWg0LDExNDM1ODcyNA02009WInwBT6?s=il&locale=en-GB",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhotoroomCollector.CONFIG);
    }
}
