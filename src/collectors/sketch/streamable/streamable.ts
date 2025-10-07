
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StreamableCollector extends SketchCollector {

    static CONFIG = {
        id: "streamable",
        name: "Streamable",
        description: "i18n.collectors.streamable.description",
        version: "0",
        website: "https://streamable.com/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1665693.jpg",
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
        entryUrl: "https://streamable.com/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StreamableCollector.CONFIG);
    }
}
