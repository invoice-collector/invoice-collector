
import { SketchCollector } from '../../sketchCollector';

export class OcpCollector extends SketchCollector {

    static CONFIG = {
        id: "ocp",
        name: "OCP",
        description: "i18n.collectors.ocp.description",
        version: "0",
        website: "https://www.mon-ocph.fr/ocp-auth-hopital-app/login?redirect_to=/ocp-auth-hopital/oauth/authorize/?response_type=code&scope=openid&client_id=nv1KBZYmXw9w63BIRxPVHU9TPsFrPz&state=UvS2wYUl7U8fSgSf9HxKa_FcctA&redirect_uri=https%3A%2F%2Fwww.mon-ocph.fr%2Focp-h",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/505995.jpg",
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
        entryUrl: "https://www.mon-ocph.fr/ocp-auth-hopital-app/login?redirect_to=/ocp-auth-hopital/oauth/authorize/?response_type=code&scope=openid&client_id=nv1KBZYmXw9w63BIRxPVHU9TPsFrPz&state=UvS2wYUl7U8fSgSf9HxKa_FcctA&redirect_uri=https%3A%2F%2Fwww.mon-ocph.fr%2Focp-h",
    }

    constructor() {
        super(OcpCollector.CONFIG);
    }
}
