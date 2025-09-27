
import { SketchCollector } from '../../sketchCollector';

export class LastAppCollector extends SketchCollector {

    static CONFIG = {
        id: "last_app",
        name: "Last.App",
        description: "i18n.collectors.last_app.description",
        version: "0",
        website: "https://admin.last.app/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396975.jpg",
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
        entryUrl: "https://admin.last.app/login?",
    }

    constructor() {
        super(LastAppCollector.CONFIG);
    }
}
