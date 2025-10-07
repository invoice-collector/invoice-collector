
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeHerneCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_herne",
        name: "Stadtwerke Herne",
        description: "i18n.collectors.stadtwerke_herne.description",
        version: "0",
        website: "https://service.stadtwerke-herne.de/online/postbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1232526.jpg",
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
        entryUrl: "https://service.stadtwerke-herne.de/online/postbox",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeHerneCollector.CONFIG);
    }
}
