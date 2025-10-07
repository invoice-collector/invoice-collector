
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaregioneCollector extends SketchCollector {

    static CONFIG = {
        id: "laregione",
        name: "LaRegione",
        description: "i18n.collectors.laregione.description",
        version: "0",
        website: "https://aboshop.laregione.ch/?login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4230655.jpg",
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
        entryUrl: "https://aboshop.laregione.ch/?login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaregioneCollector.CONFIG);
    }
}
