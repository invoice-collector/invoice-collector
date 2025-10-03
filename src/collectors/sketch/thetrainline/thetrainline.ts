
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThetrainlineCollector extends SketchCollector {

    static CONFIG = {
        id: "thetrainline",
        name: "TheTrainline",
        description: "i18n.collectors.thetrainline.description",
        version: "0",
        website: "http://www.thetrainline.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103299.jpg",
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
        entryUrl: "http://www.thetrainline.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThetrainlineCollector.CONFIG);
    }
}
