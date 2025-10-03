
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeMunchenEmobilityCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_munchen_emobility_cloud",
        name: "Stadtwerke Munchen - Emobility Cloud",
        description: "i18n.collectors.stadtwerke_munchen_emobility_cloud.description",
        version: "0",
        website: "https://swm.emobilitycloud.com/login-bereich/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75340.jpg",
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
        entryUrl: "https://swm.emobilitycloud.com/login-bereich/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeMunchenEmobilityCloudCollector.CONFIG);
    }
}
