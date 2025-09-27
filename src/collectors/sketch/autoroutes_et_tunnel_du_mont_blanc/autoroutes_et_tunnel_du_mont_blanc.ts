
import { SketchCollector } from '../../sketchCollector';

export class AutoroutesEtTunnelDuMontBlancCollector extends SketchCollector {

    static CONFIG = {
        id: "autoroutes_et_tunnel_du_mont_blanc",
        name: "Autoroutes et Tunnel du Mont Blanc",
        description: "i18n.collectors.autoroutes_et_tunnel_du_mont_blanc.description",
        version: "0",
        website: "https://espaceabonnes.atmb.net/Default.aspx?tabid=58&returnurl=%2fdefault.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27498.jpg",
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
        entryUrl: "https://espaceabonnes.atmb.net/Default.aspx?tabid=58&returnurl=%2fdefault.aspx",
    }

    constructor() {
        super(AutoroutesEtTunnelDuMontBlancCollector.CONFIG);
    }
}
