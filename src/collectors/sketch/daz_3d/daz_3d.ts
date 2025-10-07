
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Daz3dCollector extends SketchCollector {

    static CONFIG = {
        id: "daz_3d",
        name: "DAZ 3D",
        description: "i18n.collectors.daz_3d.description",
        version: "0",
        website: "https://www.daz3d.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034219.jpg",
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
        entryUrl: "https://www.daz3d.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Daz3dCollector.CONFIG);
    }
}
