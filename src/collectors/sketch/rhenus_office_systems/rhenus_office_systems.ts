
import { SketchCollector } from '../../sketchCollector';

export class RhenusOfficeSystemsCollector extends SketchCollector {

    static CONFIG = {
        id: "rhenus_office_systems",
        name: "Rhenus Office Systems",
        description: "i18n.collectors.rhenus_office_systems.description",
        version: "0",
        website: "https://www.aktenvernichtung.de/race-kundenportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553008.jpg",
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
        entryUrl: "https://www.aktenvernichtung.de/race-kundenportal/",
    }

    constructor() {
        super(RhenusOfficeSystemsCollector.CONFIG);
    }
}
