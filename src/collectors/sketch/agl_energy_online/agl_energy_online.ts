
import { SketchCollector } from '../../sketchCollector';

export class AglEnergyOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "agl_energy_online",
        name: "AGL Energy Online",
        description: "i18n.collectors.agl_energy_online.description",
        version: "0",
        website: "https://secure.agl.com.au/login?state=PqNr8WhJIeaQUQ9sDgxcpwFUjYNCPFob&client=8NReZXmds46C4pCMhOCN8mbHjQ60F9zh&protocol=oauth2&response_type=code&scope=openid&redirect_uri=https%3A%2F%2Fwww.agl.com.au%2Fsts%2Faccount%2Flogincallback&nonce=18fa842d4320a1c5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8516.jpg",
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
        entryUrl: "https://secure.agl.com.au/login?state=PqNr8WhJIeaQUQ9sDgxcpwFUjYNCPFob&client=8NReZXmds46C4pCMhOCN8mbHjQ60F9zh&protocol=oauth2&response_type=code&scope=openid&redirect_uri=https%3A%2F%2Fwww.agl.com.au%2Fsts%2Faccount%2Flogincallback&nonce=18fa842d4320a1c5",
    }

    constructor() {
        super(AglEnergyOnlineCollector.CONFIG);
    }
}
