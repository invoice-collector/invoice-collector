
import { SketchCollector } from '../../sketchCollector';

export class ModeratorenwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "moderatorenwerk",
        name: "Moderatorenwerk",
        description: "i18n.collectors.moderatorenwerk.description",
        version: "0",
        website: "https://www.moderatorenwerk.de/jobs/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163745.jpg",
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
        entryUrl: "https://www.moderatorenwerk.de/jobs/rechnungen/",
    }

    constructor() {
        super(ModeratorenwerkCollector.CONFIG);
    }
}
