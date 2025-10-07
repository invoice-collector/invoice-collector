
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TaboolaCollector extends SketchCollector {

    static CONFIG = {
        id: "taboola",
        name: "Taboola",
        description: "i18n.collectors.taboola.description",
        version: "0",
        website: "https://authentication.taboola.com/authentication/login?grant_type=authorization_code&response_type=code&redirect_uri=https%3A%2F%2Fbackstage.taboola.com%2Fbackstage%2Fauthenticate%2Flogin&client_id=696458c0d59143569c2f45f3efac0896&redir=https%3A%2F%2Fbac",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14813.jpg",
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
        entryUrl: "https://authentication.taboola.com/authentication/login?grant_type=authorization_code&response_type=code&redirect_uri=https%3A%2F%2Fbackstage.taboola.com%2Fbackstage%2Fauthenticate%2Flogin&client_id=696458c0d59143569c2f45f3efac0896&redir=https%3A%2F%2Fbac",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TaboolaCollector.CONFIG);
    }
}
