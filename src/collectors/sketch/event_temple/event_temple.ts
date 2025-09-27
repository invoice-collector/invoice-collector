
import { SketchCollector } from '../../sketchCollector';

export class EventTempleCollector extends SketchCollector {

    static CONFIG = {
        id: "event_temple",
        name: "Event Temple",
        description: "i18n.collectors.event_temple.description",
        version: "0",
        website: "https://app.eventtemple.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173884.jpg",
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
        entryUrl: "https://app.eventtemple.com/users/sign_in",
    }

    constructor() {
        super(EventTempleCollector.CONFIG);
    }
}
