
import { SketchCollector } from '../../sketchCollector';

export class ActivateByReclayCollector extends SketchCollector {

    static CONFIG = {
        id: "activate_by_reclay",
        name: "activate By Reclay",
        description: "i18n.collectors.activate_by_reclay.description",
        version: "0",
        website: "https://activate.reclay.de/activate_germany_german/customer/account/login/referer/aHR0cHM6Ly9hY3RpdmF0ZS5yZWNsYXkuZGUvYWN0aXZhdGVfZ2VybWFueV9nZXJtYW4v/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/842030.jpg",
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
        entryUrl: "https://activate.reclay.de/activate_germany_german/customer/account/login/referer/aHR0cHM6Ly9hY3RpdmF0ZS5yZWNsYXkuZGUvYWN0aXZhdGVfZ2VybWFueV9nZXJtYW4v/",
    }

    constructor() {
        super(ActivateByReclayCollector.CONFIG);
    }
}
