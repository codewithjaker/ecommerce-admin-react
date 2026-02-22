import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Upload, X } from "lucide-react";


// Reusable image upload component
function ImageUpload({ label, maxSize, onImageChange }: { label: string; maxSize: string; onImageChange?: (file: File | null) => void }) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        onImageChange?.(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreview(null);
    onImageChange?.(null);
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 bg-gray-50/50 relative min-h-[150px]">
        {preview ? (
          <>
            <div className="relative w-32 h-32">
              <img
                src={preview}
                alt="Preview"
                // fill
                className="object-contain rounded-md"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearImage}
              className="absolute top-2 right-2"
            >
              <X className="h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground">{maxSize}</p>
          </>
        ) : (
          <>
            <Upload className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm font-medium">Drag & drop image here</p>
            <p className="text-xs text-muted-foreground">{maxSize}</p>
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              id={label.replace(/\s+/g, '-')}
              onChange={handleFileChange}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById(label.replace(/\s+/g, '-'))?.click()}
            >
              Choose File
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default function SiteSettingPage() {
  // General tab state
  const [general, setGeneral] = useState({
    siteName: "Bazaaar NextJS Template",
    siteDescription: "Fully Ecommerce System",
    siteBannerText: "Get your grocery delivery within 30 minutes",
  });

  // Topbar tab state
  const [topbarLeft, setTopbarLeft] = useState({
    phone: "12345678910",
    email: "ui.lib.drive@email.com",
  });
  const [topbarRight, setTopbarRight] = useState({
    phone: "12345678910",
    email: "aii.lib.drive@email.com",
  });

  // Footer tab state
  const [footer, setFooter] = useState({
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.",
    secondColumnHeading: "About Us",
    secondColumnLinks: [
      "Careers",
      "Our Cares",
      "Privacy Policy",
      "Terms & Conditions",
    ],
    thirdColumnHeading: "Customer Care",
    thirdColumnLinks: [
      "How to Buy",
      "Help Center",
      "Track Your Order",
      "Return & Refunds",
      "Corporate & Bulk Purchasing",
    ],
    fourthColumnHeading: "Customer Care",
    headings: "Robotix Flex Plus Jakarta Sans B I U S",
    address: "70 Washington Square South, New York, NY 10012, United States of America",
    email: "uilib.help@gmail.com",
    phone: "+11123456780",
  });

  // Social Links tab state
  const [social, setSocial] = useState({
    facebook: "https://www.facebook.com/UILibOfficial",
    instagram: "https://www.instagram.com/uilibofficial",
    playstore: "https://playstorelinkhere.com",
    appstore: "https://appstorelinkhere.com",
  });

  // Banner Slider tab state
  const [bannerSlider, setBannerSlider] = useState<File[]>([]); // multiple slides

  // Shipping & VAT tab state
  const [shippingVat, setShippingVat] = useState({
    shippingCharge: "2.99",
    vat: "1.05",
  });

  const handleGeneralChange = (field: string, value: string) => {
    setGeneral((prev) => ({ ...prev, [field]: value }));
  };

  const handleTopbarLeftChange = (field: string, value: string) => {
    setTopbarLeft((prev) => ({ ...prev, [field]: value }));
  };

  const handleTopbarRightChange = (field: string, value: string) => {
    setTopbarRight((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (field: string, value: string) => {
    setSocial((prev) => ({ ...prev, [field]: value }));
  };

  const handleShippingVatChange = (field: string, value: string) => {
    setShippingVat((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // In a real app, you'd send data to an API
    console.log("Saving settings...", { general, topbarLeft, topbarRight, footer, social, bannerSlider, shippingVat });
    // Show toast or alert
    alert("Settings saved (demo)");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Site Setting</h1>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="topbar">Topbar</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
          <TabsTrigger value="social">Social Links</TabsTrigger>
          <TabsTrigger value="banner">Banner Slider</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & VAT</TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure your site name, description, and banner.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input
                  id="site-name"
                  value={general.siteName}
                  onChange={(e) => handleGeneralChange("siteName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  value={general.siteDescription}
                  onChange={(e) => handleGeneralChange("siteDescription", e.target.value)}
                />
              </div>
              <ImageUpload label="Banner Image" maxSize="Maximum Size 5MB" />
              <div className="space-y-2">
                <Label htmlFor="site-banner-text">Site Banner Text</Label>
                <Input
                  id="site-banner-text"
                  value={general.siteBannerText}
                  onChange={(e) => handleGeneralChange("siteBannerText", e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Topbar Tab */}
        <TabsContent value="topbar">
          <Card>
            <CardHeader>
              <CardTitle>Topbar Settings</CardTitle>
              <CardDescription>Configure topbar contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Top Bar Left</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="topbar-left-phone">Phone</Label>
                    <Input
                      id="topbar-left-phone"
                      value={topbarLeft.phone}
                      onChange={(e) => handleTopbarLeftChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topbar-left-email">Email</Label>
                    <Input
                      id="topbar-left-email"
                      value={topbarLeft.email}
                      onChange={(e) => handleTopbarLeftChange("email", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Top Bar Right</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="topbar-right-phone">Phone</Label>
                    <Input
                      id="topbar-right-phone"
                      value={topbarRight.phone}
                      onChange={(e) => handleTopbarRightChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topbar-right-email">Email</Label>
                    <Input
                      id="topbar-right-email"
                      value={topbarRight.email}
                      onChange={(e) => handleTopbarRightChange("email", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Footer Tab */}
        <TabsContent value="footer">
          <Card>
            <CardHeader>
              <CardTitle>Footer Settings</CardTitle>
              <CardDescription>Manage footer content and links.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="footer-description">Footer Description</Label>
                <Textarea
                  id="footer-description"
                  value={footer.description}
                  onChange={(e) => setFooter((prev) => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Second Column */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="second-heading">Second Column Heading</Label>
                    <Input
                      id="second-heading"
                      value={footer.secondColumnHeading}
                      onChange={(e) => setFooter((prev) => ({ ...prev, secondColumnHeading: e.target.value }))}
                    />
                  </div>
                  {footer.secondColumnLinks.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Input value={link} readOnly className="flex-1" />
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm">Add Link</Button>
                </div>

                {/* Third Column */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="third-heading">Third Column Heading</Label>
                    <Input
                      id="third-heading"
                      value={footer.thirdColumnHeading}
                      onChange={(e) => setFooter((prev) => ({ ...prev, thirdColumnHeading: e.target.value }))}
                    />
                  </div>
                  {footer.thirdColumnLinks.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Input value={link} readOnly className="flex-1" />
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm">Add Link</Button>
                </div>

                {/* Fourth Column */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="fourth-heading">Fourth Column Heading</Label>
                    <Input
                      id="fourth-heading"
                      value={footer.fourthColumnHeading}
                      onChange={(e) => setFooter((prev) => ({ ...prev, fourthColumnHeading: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Headings</Label>
                    <Input
                      value={footer.headings}
                      onChange={(e) => setFooter((prev) => ({ ...prev, headings: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Contact Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="footer-address">Address</Label>
                  <Input
                    id="footer-address"
                    value={footer.address}
                    onChange={(e) => setFooter((prev) => ({ ...prev, address: e.target.value }))}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="footer-email">Email</Label>
                    <Input
                      id="footer-email"
                      value={footer.email}
                      onChange={(e) => setFooter((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="footer-phone">Phone</Label>
                    <Input
                      id="footer-phone"
                      value={footer.phone}
                      onChange={(e) => setFooter((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Social Links Tab */}
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social & App Links</CardTitle>
              <CardDescription>Configure your social media and app store links.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Social Links</h3>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    value={social.facebook}
                    onChange={(e) => handleSocialChange("facebook", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    value={social.instagram}
                    onChange={(e) => handleSocialChange("instagram", e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">App Links</h3>
                <div className="space-y-2">
                  <Label htmlFor="playstore">Playstore</Label>
                  <Input
                    id="playstore"
                    value={social.playstore}
                    onChange={(e) => handleSocialChange("playstore", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="appstore">Appstore</Label>
                  <Input
                    id="appstore"
                    value={social.appstore}
                    onChange={(e) => handleSocialChange("appstore", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Banner Slider Tab */}
        <TabsContent value="banner">
          <Card>
            <CardHeader>
              <CardTitle>Banner Slider</CardTitle>
              <CardDescription>Upload slides for the homepage banner slider.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ImageUpload label="Slide Image 1" maxSize="Maximum Size 2MB" />
              <ImageUpload label="Slide Image 2" maxSize="Maximum Size 2MB" />
              <ImageUpload label="Slide Image 3" maxSize="Maximum Size 2MB" />
              <p className="text-sm text-muted-foreground">You can add more slides via API.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Shipping & VAT Tab */}
        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Shipping & VAT</CardTitle>
              <CardDescription>Set shipping charges and VAT rates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="shipping-charge">Shipping Charge ($)</Label>
                  <Input
                    id="shipping-charge"
                    type="number"
                    step="0.01"
                    value={shippingVat.shippingCharge}
                    onChange={(e) => handleShippingVatChange("shippingCharge", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vat">VAT ($)</Label>
                  <Input
                    id="vat"
                    type="number"
                    step="0.01"
                    value={shippingVat.vat}
                    onChange={(e) => handleShippingVatChange("vat", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}