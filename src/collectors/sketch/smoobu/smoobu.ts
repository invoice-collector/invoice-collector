
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmoobuCollector extends SketchCollector {

    static CONFIG = {
        id: "smoobu",
        name: "Smoobu",
        description: "i18n.collectors.smoobu.description",
        version: "0",
        website: "https://login.smoobu.com/de/login?utm_source=Smoobu.com&utm_medium=Login&utm_campaign=LoginTopMenu_DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33469.jpg",
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
        entryUrl: "https://login.smoobu.com/de/login?utm_source=Smoobu.com&utm_medium=Login&utm_campaign=LoginTopMenu_DE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmoobuCollector.CONFIG);
    }
}
