
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VectorworksServiceSelectCollector extends SketchCollector {

    static CONFIG = {
        id: "vectorworks_service_select",
        name: "Vectorworks Service Select",
        description: "i18n.collectors.vectorworks_service_select.description",
        version: "0",
        website: "https://sso.vectorworks.net/accounts/login/?next=https%3A//customers.vectorworks.net/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1604205.jpg",
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
        entryUrl: "https://sso.vectorworks.net/accounts/login/?next=https%3A//customers.vectorworks.net/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VectorworksServiceSelectCollector.CONFIG);
    }
}
