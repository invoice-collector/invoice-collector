
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JokaCollector extends SketchCollector {

    static CONFIG = {
        id: "joka",
        name: "Joka",
        description: "i18n.collectors.joka.description",
        version: "0",
        website: "https://www.joka.de/joka-parkett-laminat-teppich-designboeden-und-mehr.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127297.jpg",
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
        entryUrl: "https://www.joka.de/joka-parkett-laminat-teppich-designboeden-und-mehr.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JokaCollector.CONFIG);
    }
}
