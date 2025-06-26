import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Typography variant="h1">Be the Light</Typography>
        <Typography variant="h2">Rooted in Love</Typography>
        <Typography variant="h3">Let Grow</Typography>
        <Typography variant="h4">Sunday Service</Typography>
        <Typography variant="h5">Links</Typography>
        <Typography variant="h6">Stay Connected</Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          consequuntur.
        </Typography>
        <Button>Click</Button>
      </main>
    </div>
  );
}
