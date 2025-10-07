
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MydisplaysCollector extends SketchCollector {

    static CONFIG = {
        id: "mydisplays",
        name: "Mydisplays",
        description: "i18n.collectors.mydisplays.description",
        version: "0",
        website: "http://www.mydisplays.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62360.jpg",
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
        entryUrl: "http://www.mydisplays.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MydisplaysCollector.CONFIG);
    }
}
