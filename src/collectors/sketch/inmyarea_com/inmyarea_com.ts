
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InmyareaComCollector extends SketchCollector {

    static CONFIG = {
        id: "inmyarea_com",
        name: "InMyArea.com",
        description: "i18n.collectors.inmyarea_com.description",
        version: "0",
        website: "http://www.inmyarea.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8692.jpg",
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
        entryUrl: "http://www.inmyarea.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InmyareaComCollector.CONFIG);
    }
}
