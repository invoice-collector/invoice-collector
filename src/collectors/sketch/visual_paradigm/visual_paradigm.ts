
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VisualParadigmCollector extends SketchCollector {

    static CONFIG = {
        id: "visual_paradigm",
        name: "Visual Paradigm",
        description: "i18n.collectors.visual_paradigm.description",
        version: "0",
        website: "http://www.visual-paradigm.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15881.jpg",
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
        entryUrl: "http://www.visual-paradigm.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VisualParadigmCollector.CONFIG);
    }
}
