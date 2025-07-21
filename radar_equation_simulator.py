import tkinter as tk
from tkinter import ttk
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class RadarEquationSimulator:
    def __init__(self, root):
        self.root = root
        self.root.title("Mô phỏng Phương trình Ra đa")
        self.root.geometry("900x700")
        
        # Khởi tạo các biến
        self.pt = tk.DoubleVar(value=1000.0)  # Công suất phát (W)
        self.gt = tk.DoubleVar(value=30.0)    # Độ lợi ăng-ten phát (dB)
        self.gr = tk.DoubleVar(value=30.0)    # Độ lợi ăng-ten thu (dB)
        self.sigma = tk.DoubleVar(value=1.0)  # Tiết diện ra đa (m²)
        self.freq = tk.DoubleVar(value=3.0)   # Tần số (GHz)
        self.r_min = tk.DoubleVar(value=1.0)  # Khoảng cách tối thiểu (km)
        self.r_max = tk.DoubleVar(value=100.0) # Khoảng cách tối đa (km)
        
        self.create_widgets()
        self.update_plot()
        
    def create_widgets(self):
        # Frame cho các điều khiển
        control_frame = ttk.LabelFrame(self.root, text="Tham số Phương trình Ra đa")
        control_frame.pack(fill="x", padx=10, pady=10)
        
        # Tạo các điều khiển
        ttk.Label(control_frame, text="Công suất phát (W):").grid(row=0, column=0, sticky="w", padx=5, pady=5)
        ttk.Scale(control_frame, from_=100, to=10000, variable=self.pt, command=lambda _: self.update_plot()).grid(row=0, column=1, sticky="ew", padx=5, pady=5)
        ttk.Label(control_frame, textvariable=self.pt).grid(row=0, column=2, padx=5, pady=5)
        
        ttk.Label(control_frame, text="Độ lợi ăng-ten phát (dB):").grid(row=1, column=0, sticky="w", padx=5, pady=5)
        ttk.Scale(control_frame, from_=0, to=50, variable=self.gt, command=lambda _: self.update_plot()).grid(row=1, column=1, sticky="ew", padx=5, pady=5)
        ttk.Label(control_frame, textvariable=self.gt).grid(row=1, column=2, padx=5, pady=5)
        
        ttk.Label(control_frame, text="Độ lợi ăng-ten thu (dB):").grid(row=2, column=0, sticky="w", padx=5, pady=5)
        ttk.Scale(control_frame, from_=0, to=50, variable=self.gr, command=lambda _: self.update_plot()).grid(row=2, column=1, sticky="ew", padx=5, pady=5)
        ttk.Label(control_frame, textvariable=self.gr).grid(row=2, column=2, padx=5, pady=5)
        
        ttk.Label(control_frame, text="Tiết diện ra đa (m²):").grid(row=3, column=0, sticky="w", padx=5, pady=5)
        ttk.Scale(control_frame, from_=0.1, to=100, variable=self.sigma, command=lambda _: self.update_plot()).grid(row=3, column=1, sticky="ew", padx=5, pady=5)
        ttk.Label(control_frame, textvariable=self.sigma).grid(row=3, column=2, padx=5, pady=5)
        
        ttk.Label(control_frame, text="Tần số (GHz):").grid(row=4, column=0, sticky="w", padx=5, pady=5)
        ttk.Scale(control_frame, from_=1, to=10, variable=self.freq, command=lambda _: self.update_plot()).grid(row=4, column=1, sticky="ew", padx=5, pady=5)
        ttk.Label(control_frame, textvariable=self.freq).grid(row=4, column=2, padx=5, pady=5)
        
        ttk.Label(control_frame, text="Khoảng cách (km):").grid(row=5, column=0, sticky="w", padx=5, pady=5)
        range_frame = ttk.Frame(control_frame)
        range_frame.grid(row=5, column=1, sticky="ew", padx=5, pady=5)
        
        ttk.Label(range_frame, text="Min:").pack(side="left")
        ttk.Scale(range_frame, from_=1, to=50, variable=self.r_min, command=lambda _: self.update_plot()).pack(side="left", expand=True, fill="x")
        ttk.Label(range_frame, textvariable=self.r_min).pack(side="left")
        
        ttk.Label(range_frame, text="Max:").pack(side="left")
        ttk.Scale(range_frame, from_=50, to=500, variable=self.r_max, command=lambda _: self.update_plot()).pack(side="left", expand=True, fill="x")
        ttk.Label(range_frame, textvariable=self.r_max).pack(side="left")
        
        # Thêm nút cập nhật
        ttk.Button(control_frame, text="Cập nhật", command=self.update_plot).grid(row=6, column=1, pady=10)
        
        # Cấu hình grid
        for i in range(7):
            control_frame.grid_columnconfigure(1, weight=1)
        
        # Frame cho biểu đồ
        self.plot_frame = ttk.Frame(self.root)
        self.plot_frame.pack(fill="both", expand=True, padx=10, pady=10)
        
        # Tạo biểu đồ
        self.fig, self.ax = plt.subplots(figsize=(8, 6))
        self.canvas = FigureCanvasTkAgg(self.fig, master=self.plot_frame)
        self.canvas.get_tk_widget().pack(fill="both", expand=True)
    
    def radar_equation(self, r, pt, gt_db, gr_db, sigma, freq_ghz):
        # Chuyển đổi dB sang hệ số
        gt = 10**(gt_db/10)
        gr = 10**(gr_db/10)
        
        # Tính bước sóng (m)
        wavelength = 0.3 / freq_ghz
        
        # Tính công suất thu (W)
        pr = (pt * gt * gr * sigma * wavelength**2) / ((4 * np.pi)**3 * r**4)
        
        return pr
    
    def update_plot(self):
        self.ax.clear()
        
        # Lấy giá trị từ các điều khiển
        pt = self.pt.get()
        gt = self.gt.get()
        gr = self.gr.get()
        sigma = self.sigma.get()
        freq = self.freq.get()
        r_min = self.r_min.get()
        r_max = self.r_max.get()
        
        # Tạo mảng khoảng cách (km)
        r_km = np.linspace(r_min, r_max, 1000)
        # Chuyển đổi km sang m
        r_m = r_km * 1000
        
        # Tính công suất thu
        pr = self.radar_equation(r_m, pt, gt, gr, sigma, freq)
        
        # Vẽ biểu đồ
        self.ax.plot(r_km, 10 * np.log10(pr * 1000), 'b-')
        self.ax.set_xlabel('Khoảng cách (km)')
        self.ax.set_ylabel('Công suất thu (dBm)')
        self.ax.set_title('Phương trình Ra đa')
        self.ax.grid(True)
        
        # Thêm chú thích
        self.ax.text(0.02, 0.95, f'Pt = {pt:.1f} W\nGt = {gt:.1f} dB\nGr = {gr:.1f} dB\n'
                     f'σ = {sigma:.1f} m²\nf = {freq:.1f} GHz',
                     transform=self.ax.transAxes, bbox=dict(facecolor='white', alpha=0.7))
        
        self.canvas.draw()

if __name__ == "__main__":
    root = tk.Tk()
    app = RadarEquationSimulator(root)
    root.mainloop()