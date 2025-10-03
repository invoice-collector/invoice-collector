
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MAutodocCollector extends SketchCollector {

    static CONFIG = {
        id: "m_autodoc",
        name: "M.Autodoc",
        description: "i18n.collectors.m_autodoc.description",
        version: "0",
        website: "https://www.autodoc.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136825.jpg",
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
        entryUrl: "https://www.autodoc.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MAutodocCollector.CONFIG);
    }
}
