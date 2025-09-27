
import { SketchCollector } from '../../sketchCollector';

export class MitgoIdCollector extends SketchCollector {

    static CONFIG = {
        id: "mitgo_id",
        name: "Mitgo ID",
        description: "i18n.collectors.mitgo_id.description",
        version: "0",
        website: "https://login.mitgo.com/auth/realms/users/protocol/openid-connect/auth?client_id=monolith&redirect_uri=https%3A%2F%2Fstore.admitad.com%2Fde%2Fsso%2Flogin-complete%2F&response_type=code&scope=openid+email+profile&state=f7bc7a43-e69a-4ac1-8955-9a1748359c72&",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1941389.jpg",
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
        entryUrl: "https://login.mitgo.com/auth/realms/users/protocol/openid-connect/auth?client_id=monolith&redirect_uri=https%3A%2F%2Fstore.admitad.com%2Fde%2Fsso%2Flogin-complete%2F&response_type=code&scope=openid+email+profile&state=f7bc7a43-e69a-4ac1-8955-9a1748359c72&",
    }

    constructor() {
        super(MitgoIdCollector.CONFIG);
    }
}
