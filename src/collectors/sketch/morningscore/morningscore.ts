
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MorningscoreCollector extends SketchCollector {

    static CONFIG = {
        id: "morningscore",
        name: "morningscore",
        description: "i18n.collectors.morningscore.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xR2lHdDZGUHlWYk1XUjdSLF9OdGxzbXJJN1NtcWUxbTFaTndXSHA3RDBTMTExZWk40100XkEf8W8h",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1924054.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xR2lHdDZGUHlWYk1XUjdSLF9OdGxzbXJJN1NtcWUxbTFaTndXSHA3RDBTMTExZWk40100XkEf8W8h",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MorningscoreCollector.CONFIG);
    }
}
