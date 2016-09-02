using System.Web;
using System.Web.Optimization;

namespace MvcApiAngularBoilerplate
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // TODO add the piece to push script to cdn
            bundles.Add(new ScriptBundle("~/Content/appJs")
                .Include("~/assets/dist/index.js"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = !HttpContext.Current.IsDebuggingEnabled;
        }
    }
}
