
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LabelresizerCollector extends SketchCollector {

    static CONFIG = {
        id: "labelresizer",
        name: "LabelResizer",
        description: "i18n.collectors.labelresizer.description",
        version: "0",
        website: "https://www.labelresizer.com/member/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727949.jpg",
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
        entryUrl: "https://www.labelresizer.com/member/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LabelresizerCollector.CONFIG);
    }
}
