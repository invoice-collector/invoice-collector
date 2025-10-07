
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeLindauCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_lindau",
        name: "Stadtwerke Lindau",
        description: "i18n.collectors.stadtwerke_lindau.description",
        version: "0",
        website: "http://www.sw-lindau.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9244.jpg",
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
        entryUrl: "http://www.sw-lindau.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeLindauCollector.CONFIG);
    }
}
