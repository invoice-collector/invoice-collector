
import { SketchCollector } from '../../sketchCollector';

export class TopleftCollector extends SketchCollector {

    static CONFIG = {
        id: "topleft",
        name: "Topleft",
        description: "i18n.collectors.topleft.description",
        version: "0",
        website: "https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fbitsandbytes.topleft.team%2fsettings%2flicensing%2fbilling%2f&c=E,1,8HZRUjhnX5H7JvYVF2cW7jnFEPbBrbxeQQnxoSn2TsbAmBB2O56y9huiuXlAWiASTM2opNpPyi7TXJmq7Llu_qkxe3sdm_h8dSodtQIiQbbH2aoibXELfcpT_tm9&typo=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862701.jpg",
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
        entryUrl: "https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fbitsandbytes.topleft.team%2fsettings%2flicensing%2fbilling%2f&c=E,1,8HZRUjhnX5H7JvYVF2cW7jnFEPbBrbxeQQnxoSn2TsbAmBB2O56y9huiuXlAWiASTM2opNpPyi7TXJmq7Llu_qkxe3sdm_h8dSodtQIiQbbH2aoibXELfcpT_tm9&typo=1",
    }

    constructor() {
        super(TopleftCollector.CONFIG);
    }
}
