
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EuraniaGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "eurania_gmbh",
        name: "Eurania GmbH",
        description: "i18n.collectors.eurania_gmbh.description",
        version: "0",
        website: "https://www.germoffice.de/kupo/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2656485.jpg",
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
        entryUrl: "https://www.germoffice.de/kupo/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuraniaGmbhCollector.CONFIG);
    }
}
