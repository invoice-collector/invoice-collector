
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeRostockCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_rostock",
        name: "Stadtwerke Rostock",
        description: "i18n.collectors.stadtwerke_rostock.description",
        version: "0",
        website: "https://ihrportal.swrag.de/INTERSHOP/web/WFS/SWR-Portal-Site/-/-/-/Default-Start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90725.jpg",
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
        entryUrl: "https://ihrportal.swrag.de/INTERSHOP/web/WFS/SWR-Portal-Site/-/-/-/Default-Start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeRostockCollector.CONFIG);
    }
}
