
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GetraenkebringdienstUmbachCollector extends SketchCollector {

    static CONFIG = {
        id: "getraenkebringdienst_umbach",
        name: "Getraenkebringdienst Umbach",
        description: "i18n.collectors.getraenkebringdienst_umbach.description",
        version: "0",
        website: "https://shop.getraenkebringdienst-umbach.de/document/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1369939.jpg",
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
        entryUrl: "https://shop.getraenkebringdienst-umbach.de/document/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetraenkebringdienstUmbachCollector.CONFIG);
    }
}
