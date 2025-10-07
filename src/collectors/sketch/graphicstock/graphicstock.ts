
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GraphicstockCollector extends SketchCollector {

    static CONFIG = {
        id: "graphicstock",
        name: "GraphicStock",
        description: "i18n.collectors.graphicstock.description",
        version: "0",
        website: "https://www.storyblocks.com/login?redirect=%2Fstock-image",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8136.jpg",
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
        entryUrl: "https://www.storyblocks.com/login?redirect=%2Fstock-image",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GraphicstockCollector.CONFIG);
    }
}
