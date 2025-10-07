
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GetStreamCollector extends SketchCollector {

    static CONFIG = {
        id: "get_stream",
        name: "Get Stream",
        description: "i18n.collectors.get_stream.description",
        version: "0",
        website: "https://getstream.io/dashboard/organization/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/157974.jpg",
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
        entryUrl: "https://getstream.io/dashboard/organization/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetStreamCollector.CONFIG);
    }
}
