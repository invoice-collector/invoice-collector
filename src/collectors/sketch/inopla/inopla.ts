
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InoplaCollector extends SketchCollector {

    static CONFIG = {
        id: "inopla",
        name: "inopla",
        description: "i18n.collectors.inopla.description",
        version: "0",
        website: "https://auth.inopla.de/realms/inopla/protocol/openid-connect/auth?response_type=code&client_id=administration&redirect_uri=https://app.inopla.de&scope=openid",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2154125.jpg",
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
        entryUrl: "https://auth.inopla.de/realms/inopla/protocol/openid-connect/auth?response_type=code&client_id=administration&redirect_uri=https://app.inopla.de&scope=openid",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InoplaCollector.CONFIG);
    }
}
