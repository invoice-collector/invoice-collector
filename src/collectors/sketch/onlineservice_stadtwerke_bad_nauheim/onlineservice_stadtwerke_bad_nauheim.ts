
import { SketchCollector } from '../../sketchCollector';

export class OnlineserviceStadtwerkeBadNauheimCollector extends SketchCollector {

    static CONFIG = {
        id: "onlineservice_stadtwerke_bad_nauheim",
        name: "Onlineservice Stadtwerke Bad Nauheim",
        description: "i18n.collectors.onlineservice_stadtwerke_bad_nauheim.description",
        version: "0",
        website: "https://onlineservice.service-rz.de/?act=login&werknr=63&System=Prod#email",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131227.jpg",
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
        entryUrl: "https://onlineservice.service-rz.de/?act=login&werknr=63&System=Prod#email",
    }

    constructor() {
        super(OnlineserviceStadtwerkeBadNauheimCollector.CONFIG);
    }
}
