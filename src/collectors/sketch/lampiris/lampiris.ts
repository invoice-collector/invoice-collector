
import { SketchCollector } from '../../sketchCollector';

export class LampirisCollector extends SketchCollector {

    static CONFIG = {
        id: "lampiris",
        name: "Lampiris",
        description: "i18n.collectors.lampiris.description",
        version: "0",
        website: "https://sso.lampiris.be/auth/realms/belgium-external/protocol/openid-connect/auth?client_id=cuzo&response_type=code&scope=openid%20email&kc_locale=fr&redirect_uri=https%3A//my.lampiris.be/openid-connect/belgium_external&state=906ff567c3b5b391768aa0cb09c83",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27335.jpg",
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
        entryUrl: "https://sso.lampiris.be/auth/realms/belgium-external/protocol/openid-connect/auth?client_id=cuzo&response_type=code&scope=openid%20email&kc_locale=fr&redirect_uri=https%3A//my.lampiris.be/openid-connect/belgium_external&state=906ff567c3b5b391768aa0cb09c83",
    }

    constructor() {
        super(LampirisCollector.CONFIG);
    }
}
