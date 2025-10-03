
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RheingasFlussiggasCollector extends SketchCollector {

    static CONFIG = {
        id: "rheingas_flussiggas",
        name: "Rheingas - Flussiggas",
        description: "i18n.collectors.rheingas_flussiggas.description",
        version: "0",
        website: "https://login.rheingas.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426728.jpg",
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
        entryUrl: "https://login.rheingas.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RheingasFlussiggasCollector.CONFIG);
    }
}
