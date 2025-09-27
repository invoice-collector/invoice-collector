
import { SketchCollector } from '../../sketchCollector';

export class AgendaCollector extends SketchCollector {

    static CONFIG = {
        id: "agenda",
        name: "Agenda",
        description: "i18n.collectors.agenda.description",
        version: "0",
        website: "https://www.agenda-software.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169046.jpg",
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
        entryUrl: "https://agenda-unternehmens-portal.de/Unternehmensportal/",
    }

    constructor() {
        super(AgendaCollector.CONFIG);
    }
}
